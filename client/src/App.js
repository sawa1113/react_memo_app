import React, { useEffect, useState } from 'react';
// Reactをインポートしています。また、useEffectとuseState(状態管理やデータ取得をするための機能)もインポートしています。
import axios from 'axios';
// RailsのAPIサーバーと通信するためにaxiosをインポートしています。

const App = () => {
  // Appという関数コンポーネント(画面の部品)を定義しています。
  const [memos, setMemos] = useState([]);
  // メモの一覧を管理するmemosという変数と、その状態を更新するためのsetMemosを定義しています。
  // []はmemosの初期値を空の配列(メモがない状態)に設定しています。
  const [content, setContent] = useState('');
  // メモの内容を管理するcontentという変数と、その状態を更新するためのsetContentを定義しています。

  useEffect(() => {
    // useEffect は、ページが読み込まれたときに1回だけ実行される。
    axios.get('http://localhost:3000/api/memos')
    // axios.get("http://localhost:3000/api/memos") でRailsのAPIからメモの一覧を取得。
      .then(response => setMemos(response.data))
      // setMemos(response.data) で取得したデータを memos にセット。
      .catch(error => console.log(error));
      // エラーが出たらコンソールに表示。
  }, []);

  const addMemo = () => { // メモを追加する関数
    axios.post('http://localhost:3000/api/memos', { content })
    // content の内容をRails APIに送信（新しいメモを作成）。
      .then(response => {
        setMemos([...memos, response.data])
        // 新しく作成されたメモを memos に追加する。
        setContent('');
        // メモの内容を空にする。
      })
      // 新しく作成されたメモを memos に追加する。
      .catch(error => console.log(error));
      // エラーが出たらコンソールに表示。
  };

  return (
    <div>
      <h1>メモアプリ</h1>
      <input type="text" name="content" id="content" value={content} onChange={e => setContent(e.target.value) } />
      {/* value={content} → 入力内容を content に反映。
      onChange={(e) => setContent(e.target.value)} → 入力が変わるたびに content を更新。 */}
      <button onClick={addMemo}>追加</button>
      {/* ボタンを押すと addMemo() を実行（メモを追加）。 */}
      <ul>
        {/* メモの一覧を表示 */}
        {memos.map(memo => <li key={memo.id}>{memo.content}</li>)}
        {/* memos.map((memo) => <li key={memo.id}>{memo.content}</li>) → memos のデータを li としてリスト表示。 */}
      </ul>
    </div>
  );
};

export default App;
// Appコンポーネントをエクスポートし、他のファイルでも使えるようにしています。