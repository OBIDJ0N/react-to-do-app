const filterHandler = (arr, filter) => {
    switch (filter) {
        case 'Active':
            return arr.filter(c => !c.completed)
        case 'Completed':
            return arr.filter(c => c.completed)
        default:
            return arr
    }
}

export {filterHandler}