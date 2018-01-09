
//图片hash字符串转换成正确的缩略图地址（此为eleme专用）
export function getImg(str) {
    let imgType=str.match(/(jpeg|png|jpg)$/)[0];
    return 'https://fuss10.elemecdn.com/' + str[0] + '/' + str.substring(1, 3) + '/' + str.substring(3) + '.'+imgType+'?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/'
}

//图片hash字符串转换成正确的大图地址（此为eleme专用）
export function getBigImg(str) {
    let imgType=str.match(/(jpeg|png|jpg)$/)[0];
    return 'https://fuss10.elemecdn.com/' + str[0] + '/' + str.substring(1, 3) + '/' + str.substring(3) + '.'+imgType+'?imageMogr/format/webp/thumbnail/750x/'
}
