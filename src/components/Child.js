
const Child = (props) => {

    const parentDataInChild = props.passData;
    const childDataInChild = 'Monu';

    return (
        <div>
            <p>Child -</p>
            <p>Parent data in child: {parentDataInChild}</p>
            <p>Child data in child: {childDataInChild}</p>
        </div>
    );

};

export default Child;