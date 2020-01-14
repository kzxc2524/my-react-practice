import React from 'react';


const SignUp = ({ formValue, formValueChange, formSubmit }) => {
    return(
        <form onSubmit={formSubmit}>
            <div>
                <label htmlFor="userNm"> {/*for 대신 htmlFor */}
                    <span>이름</span>
                    <input type="text" id="userNm" name="name" value={formValue.name} onChange={formValueChange} placeholder="이름을 적어주세요" />
                </label>
                <label htmlFor="userId">
                    <span>아이디</span>
                    <input type="text" id="userId" name="userId" value={formValue.userId} onChange={formValueChange} />
                </label>
            </div>
            <div>
                <label htmlFor="userPw">
                    <span>비밀번호</span>
                    <input type="password" id="userPw" name="userPw" value={formValue.userPw} onChange={formValueChange} />
                </label>
                <label htmlFor="userPwAgain">
                    <span>비밀번호 확인</span>
                    <input type="password" id="userPwAgain" name="userPwAgain" value={formValue.userPwAgain} onChange={formValueChange} />
                </label>
            </div>
            <input type="submit" value="작성완료"/>
        </form>
    );
}

export default SignUp;