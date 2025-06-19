import EditorComponent from './components/Editor';
import banner from './assets/allysrdev.png';

function App() {
  return (
    <div className="text-zinc-950 min-h-screen bg-linear-to-r p-10 from-slate-900 via-slate-700 to-slate-900">
      <div className="bg-white max-w-[1200px] mx-auto rounded-xl min-h-[500px] shadow-md border border-black/30 overflow-hidden grid grid-cols-[1fr]">
        <main className="p-4 max-w-[300px] sm:max-w-[800px] mx-auto">
          <div className="sm:w-[800px] sm:h-[300px] mx-auto w-[200px] h-[150px]">
            <img
              src={banner}
              alt="banner com logo do github e um letreiro '< allysrdev />'"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <EditorComponent />
        </main>
      </div>
    </div>
  );
}

export default App;
