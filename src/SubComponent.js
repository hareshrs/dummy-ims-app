import { cloneDeep } from "lodash";
import { useEffect, useState, useRef } from "react";
import { dummyApi } from "./services/service";

export function SubComponent({ ui, clickEvent }) {
    return <span onClick={() => clickEvent('bcvksdb')}>
        {ui}
    </span>
}

export function SubComponent2({ logo }) {
    const [commonVar, setCommonVar] = useState({ ui: 'show', showSub: true });
    const spanRef = useRef();

    // Mounting in function component
    // useEffect(()=>{},[])

    // Unmounting in function component
    // useEffect(() => {
    //     return () => {

    //     }
    // }, [])

    // Updating in function component
    // useEffect(() => { })

    useEffect(() => { dummyService() }, [])

    function dummyService() {
        dummyApi().then(json => console.log(json))
    }

    function imageUI() {
        let x;
        switch (commonVar.ui) {
            case 'zoom':
                x = <img src="assets/icons/stock-vector-phone-volume-vector-icon-on-transparent-background-phone-volume-icon-1135845185.jpg" className={"App-logo"} alt="logo" />

                break;
            case 'static':
                x = <img src="logo.svg" alt="logo" height={140} width="140px" />
                break;
            case 'hide':
                x = <div style={{ background: 'red' }}>hidden</div>
                break;
            default:
                x = <img src="logo.svg" className={"App-logo"} alt="logo" />
        }
        return x
    }

    //Function without callback
    // function actionFunction() {
    //     let ui = commonVar.ui;
    //     if (commonVar.ui === "show") ui = 'zoom';
    //     else if (commonVar.ui === "zoom") ui = 'static';
    //     else if (commonVar.ui === "hide") ui = 'show';
    //     else ui = 'hide'

    //     setCommonVar({ ...commonVar, ui })
    //     //      () => {
    //     //     if (commonVar.ui === "hide")
    //     //         this.setState({ showSub: false });
    //     //     else
    //     //         this.setState({ showSub: true });
    //     // })
    // }

    //  Function without callback and with additional pure clone
    // function actionFunction() {
    //     // let ui = commonVar.ui;
    //     // let subUI = commonVar.showSub;
    //     let locCommonVar = cloneDeep(commonVar);
    //     if (commonVar.ui === "show") locCommonVar.ui = 'zoom';
    //     else if (commonVar.ui === "zoom") locCommonVar.ui = 'static';
    //     else if (commonVar.ui === "hide") locCommonVar.ui = 'show';
    //     else locCommonVar.ui = 'hide'
    //     if (locCommonVar.ui === "hide")
    //         locCommonVar.showSub = false
    //     else
    //         locCommonVar.showSub = true
    //     setCommonVar({ ...commonVar, ...locCommonVar })
    // }

    // Native function
    // function actionFunction() {
    //     let locCommonVar = cloneDeep(commonVar);
    //     if (commonVar.ui === "show") locCommonVar.ui = 'zoom';
    //     else if (commonVar.ui === "zoom") locCommonVar.ui = 'static';
    //     else if (commonVar.ui === "hide") locCommonVar.ui = 'show';
    //     else locCommonVar.ui = 'hide'
    //     setCommonVar({ ...commonVar, ...locCommonVar })
    // }

    // es6 function module
    const actionFunction = () => {
        let locCommonVar = cloneDeep(commonVar);
        if (commonVar.ui === "show") locCommonVar.ui = 'zoom';
        else if (commonVar.ui === "zoom") locCommonVar.ui = 'static';
        else if (commonVar.ui === "hide") locCommonVar.ui = 'show';
        else locCommonVar.ui = 'hide';
        let spanComp = spanRef?.current
        spanComp.style.background = 'red';
        setCommonVar({ ...commonVar, ...locCommonVar })
    }
    useEffect(() => {
        setCommonVar({ ...commonVar, showSub: commonVar.ui === "hide" ? false : true })
        return () => {
            console.log("Unmounting")
        }
    }, [commonVar]);


    return <>
        <span ref={spanRef} onClick={actionFunction}>
            {imageUI()}
        </span>
        Width: {spanRef?.current?.clientWidth}px Height: {spanRef?.current?.clientHeight}px
        <div>
            Width: {spanRef?.current?.scrollWidth}px Height: {spanRef?.current?.scrollHeight}px
        </div>
        {commonVar.showSub &&
            <>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </>
        }
    </>
}