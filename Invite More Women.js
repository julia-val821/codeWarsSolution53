https://www.codewars.com/kata/58acfe4ae0201e1708000075/train/javascript

    function inviteMoreWomen(L) {
        let sum = 0;
        for(let i = 0; i < L.length; i++){
            sum += L[i];
        }
        return (sum <= 0) ? false : true;

    }