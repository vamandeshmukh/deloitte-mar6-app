import Child from "./Child";

const Parent = () => {

    const parentDataInParent = 'Sonu';
    let childDataInparent = '';

    return (
        <div>
            <p>Parent -</p>
            <p>Parent data in parent: {parentDataInParent}</p>
            <p>Child data in parent: {childDataInparent}</p>

            <Child passData={parentDataInParent} />
        </div>
    );
};

export default Parent;