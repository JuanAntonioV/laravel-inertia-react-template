import { useEffect } from "react";
import TestComponent from "../Components/TestComponent";
import useTest from "../Stores/useTest";
import TestLayout from "../Layouts/TestLayout";
import { AiFillCheckCircle } from "react-icons/ai";

const HomePage = () => {
    const { test, setTest } = useTest();

    useEffect(() => {
        console.log("store test: ", test);
        setTest("test2");
    }, []);

    return (
        <div>
            <div className="flexCenter gap-2">
                <h1 className="text-center">HomePage </h1>
                <AiFillCheckCircle color="blue" />
            </div>

            <TestComponent />
        </div>
    );
};

HomePage.layout = (page) => <TestLayout children={page} />;

export default HomePage;
