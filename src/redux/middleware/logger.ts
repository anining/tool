const logger = (store: any) => (next: any) => (action: any) => {
    console.group();
    console.log('action is:', action);
    console.log('old store is:', store.getState());
    const result = next(action);
    console.log('new store is:', store.getState());
    console.groupEnd();
    return result;
};

export default logger;
