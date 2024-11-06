import LoadingUI from "../loading";

const RenderCase = ({ children, renderIf, suspense }: RenderCaseProps) => {
    return renderIf ? children : (
        suspense ?
            <div className="h-full w-full flex justify-center place-items-center">
                <LoadingUI />
            </div>
            :
            <></>
    );
};

export default RenderCase;