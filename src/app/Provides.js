"use client"
import {Provider} from "react-redux";
const { store } = require("./redux/store")

export const Providers = ({children})=>{
    return <Provider store = {store}>{children}</Provider>
}