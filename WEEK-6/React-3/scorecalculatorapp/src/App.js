import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name={"Steeve"}
                      School={"DNV Public School"}
                      total={284}
                      goal={300} // Assuming 'goal' is 300 based on the output 94.67% from 284
      />
    </div>
  );
}

export default App;