import { useState } from 'react';
import api from '../libs/api';

function Home() {
  const [res1, setRes1] = useState();
  const [res2, setRes2] = useState();

  async function getRes1() {
    const child = window.blocklet.componentMountPoints.find((item) => item.mountPoint !== '/');
    try {
      const { data } = await api.get(`${child.mountPoint}/api/component-call`);
      setRes1(data);
    } catch (err) {
      setRes1(err.response.data);
    }
  }

  async function getRes2() {
    try {
      const { data } = await api.get('/api/component-call');
      setRes2(data);
    } catch (err) {
      setRes2(err.response.data);
    }
  }

  // useEffect(() => {
  //   getRes1();
  //   getRes2();
  // }, []);
  return (
    <>
      <h1>Component Call Demo</h1>
      <section style={{ display: 'flex', width: '80%', margin: 'auto', gap: '30px' }}>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <textarea
            readOnly
            value={JSON.stringify(res1, null, 2)}
            style={{ width: '100%', resize: 'none' }}
            rows={10}
            placeholder="点击下方按钮调用API"
          />
          <button type="button" onClick={getRes1}>
            直接调用子组件API
          </button>
        </section>
        <section style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
          <textarea
            readOnly
            value={JSON.stringify(res2, null, 2)}
            style={{ width: '100%', resize: 'none' }}
            rows={10}
            placeholder="点击下方按钮调用API"
          />
          <button type="button" onClick={getRes2}>
            使用 component-call 调用子组件API
          </button>
        </section>
      </section>
    </>
  );
}

export default Home;
