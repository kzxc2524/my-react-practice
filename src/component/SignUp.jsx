import React from 'react';


const SignUp = () => {
    return(
        <form>
            <div>
                <label htmlFor="userNm"> {/*for 대신 htmlFor */}
                    <span>이름</span>
                    <input type="text" id="userNm" value="" />
                </label>
                <label htmlFor="userId">
                    <span>아이디</span>
                    <input type="text" id="userId" value="" />
                </label>
            </div>
            <div>
                <label htmlFor="userPw">
                    <span>비밀번호</span>
                    <input type="password" id="userPw" value="" />
                </label>
                <label htmlFor="userPwAgain">
                    <span>비밀번호 확인</span>
                    <input type="password" id="userPwAgain" value="" />
                </label>
            </div>
        </form>
    );
}

export default SignUp;