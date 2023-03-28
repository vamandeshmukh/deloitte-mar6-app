
const Child = (props) => {

    const parentDataInChild = props.passData;

    return (
        <div>
            <p>Child -</p>
            <p>Parent data in child: {parentDataInChild}</p>
        </div>
    );

};

export default Child;