import '@babel/polyfill';

export async function getMemo(login) {
    console.log('getMemo', login);
    if(!login){
        return local_readMemo(login);
    }else{
        return await server_readMemo(login);
    }
}


function local_readMemo(login) {
    return localStorage.getItem('memo');
}

async function server_readMemo(login) {
    let res = await fetch('/api/memo', {
        method: 'GET',
        headers: {
            'idToken': login
        }
    })
    let data = await res.json();
    console.log(data)
    return data.value;
}

export async function writeMemo(memo, login) {
    console.log('writeMemo', memo.value, login);
    if(!login){
        return local_writeMemo(memo.value, login);
    }else{
        return await server_writeMemo(memo.value, login);
    }
}

function local_writeMemo(memo, login) {
    localStorage.setItem('memo', memo);
    return memo;
}

async function server_writeMemo(memo, login) {
    let result = await fetch('/api/memo',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'idToken': login
        },
        body: JSON.stringify({value:memo})
    });

    return memo;
}