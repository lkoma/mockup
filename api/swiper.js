const Mock = require('mockjs');

const data = function () {
    return Mock.mock({
        code: 0,
        data: {
            list: [
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
            ],
            imgs: [
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
                { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
            ]
        }
    });
};
module.exports = data;
