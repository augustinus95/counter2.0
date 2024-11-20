const initialState = {
    isSetingMode: false,
    value: 0,
    startValue: 0,
    maxValue: 0
}
type initialStateType = typeof initialState
export const counterReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INCREMENT":
            return {...state, value: state.value + 1}
        case "RESET":
            return {...state, value: state.startValue}
        case "SET_SETTING_MODE_TRUE" :
            return {...state, isSetingMode: true}
        case "SET_SETTING_MODE_FALSE" :
            return {...state, isSetingMode: false}
        case "SET-CONFIGURATION": return {...state, startValue: action.payload.startValue, maxValue: action.payload.maxValue, value: action.payload.startValue}
        default:
            return state
    }
}

export const IncrementAC = () => ({type: "INCREMENT"} as const)
export const ResetAC = () => ({type: "RESET"} as const)
export const SetSettingModeTrueAC = () => ({type: "SET_SETTING_MODE_TRUE"} as const)
export const SetSettingModeFalseAC = () => ({type: "SET_SETTING_MODE_FALSE"} as const)
export const SetConfigurationAC = (payload:{startValue:number, maxValue: number}) => ({type:"SET-CONFIGURATION", payload}as const)
type Increment = ReturnType<typeof IncrementAC>
type Reset = ReturnType<typeof ResetAC>
type SetSettingModeTrue = ReturnType<typeof SetSettingModeTrueAC>
type SetSettingModeFalse = ReturnType<typeof SetSettingModeFalseAC>
type SetConfiguration = ReturnType<typeof SetConfigurationAC>

type ActionsType = Increment | Reset | SetSettingModeTrue | SetSettingModeFalse | SetConfiguration