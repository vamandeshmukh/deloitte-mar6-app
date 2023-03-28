
const Child = (props) => {

    const parentDataInChild = props.passData;
    const childDataInChild = 'Monu';

    const passDataToParent = () => {
        console.log('passDataToParent');
        props.passFun(childDataInChild);
    };


    return (
        <div>
            <p>Child -</p>
            <p>Parent data in child: {parentDataInChild}</p>
            <p>Child data in child: {childDataInChild}</p>
            <button onClick={passDataToParent}>Click</button>
        </div>
    );

};

export default Child;