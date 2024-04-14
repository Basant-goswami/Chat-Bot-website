import Chatbot from "./Chatbot";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  return (
    <>
      <div
        className="bg:contain bg-no-repeat bg-center h-screen md:bg-cover md:bg-center"
        style={{
          backgroundImage: `URL(
              "https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?q=80&w=3196&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D "
            )`,
        }}
      >
        <Navbar />
        <Chatbot />
        <span className="animate-pulse text-red-600 font-bold absolute bottom-[145px] right-[32px]">
          Click here
        </span>
        <svg
          className="animate-bounce w-6 h-8 absolute bottom-[105px] right-[55px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512"
        >
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
      </div>
    </>
  );
}

export default App;
