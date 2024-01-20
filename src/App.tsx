import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/features/hook";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <div className=" flex flex-col justify-center items-center h-screen gap-6">
      <div className="flex justify-center items-center gap-6">
        <button
          onClick={() => dispatch(decrement())}
          className="border-2 border-red-200 px-4 py-1 text-white bg-red-600 rounded-lg hover:bg-red-700"
        >
          Decrement
        </button>
        <div className="text-xl border border-gray-400 px-3 py-0.5">
          {count}
        </div>
        <button
          onClick={() => dispatch(increment())}
          className="border-2 border-green-200 px-4 py-1 text-white bg-green-600 rounded-lg hover:bg-green-700"
        >
          Increment
        </button>
      </div>
      <div className="">
        <button
          onClick={() => dispatch(incrementByAmount(5))}
          className="border-2 border-blue-200 px-4 py-1 text-white bg-blue-600 rounded-lg hover:bg-red-700"
        >
          Hybrid Increment (5)
        </button>
      </div>
    </div>
  );
}

export default App;
