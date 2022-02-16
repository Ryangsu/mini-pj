export const nickCheck = (nick) => {
    let _reg = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|?.,;:|*~`!^\-_+<>@#$%&=]+$/;

    return _reg.test(nick);
}