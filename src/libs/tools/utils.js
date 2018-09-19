const _ = {
    delay(ms = 1000) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, ms);
        });
    },

    isString(data) {
        return typeof data === 'string';
    }
};

export {_};