import dotenv from "dotenv";
dotenv.config();

const functionOne = async () => {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`functionOne: ${count}`);
        
        if (count >= 10) {
            clearInterval(intervalId);
        }
    }, 1000);
}

const functionTwo = async () => {
    let count = 0;
    const intervalId = setInterval(() => {
        count++;
        console.log(`functionTwo: ${count}`);
        
        if (count >= 10) {
            clearInterval(intervalId);
        }
    }, 1000);
}

const main = async () => {
    const functionName: string = process.env.FUNCTION_NAME ?? "";
    console.log("process.env.NODE_ENV", process.env.NODE_ENV, process.env.CLOUD_RUN_PORT)
  
    const functions: {[key: string]: () => Promise<void>} = {
      ["functionOne"]: functionOne,
      ["functionTwo"]: functionTwo,
    };
    
    if(!functionName) {
        console.log("functionName is empty!")
    }
    
    await functions[functionName]();
  };

main().then().catch((e) => console.log("Execution could run job failed", e));
