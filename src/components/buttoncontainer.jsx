import styles from "./buttoncontainer.module.css"
const Buttonscontainer =({onButtonClick})=>{

    const Buttonnames = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0'];


 return <div classNameName={styles.buttonContainer}>
    {Buttonnames.map(Buttonnames =><button classNameName={styles.button} onClick={() =>onButtonClick(Buttonnames)}>{Buttonnames}</button>)}


 
</div> 
}
export default Buttonscontainer;