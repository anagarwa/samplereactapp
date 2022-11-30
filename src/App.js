import ReactPlayer from 'react-player'

function App() {
  return (
      <div className="App" itemscope itemid="urn:fcsconnection:/document/video" itemtype="urn:fcs:type/video">
        <ReactPlayer url='https://www.youtube.com/watch?v=O4Dkv4k9aAs' />
      </div>
  );
}
export default App;