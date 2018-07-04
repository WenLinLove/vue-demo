export const set = ({commit}) => {
    commit({
        type:'getMas',
        mas:'开始第二变化'
    })
}


export const pst = ({commit}) => {
    commit({
        type:'getPas',
        mas:'开始第一变化'
    })
}


//这里是执行的方法