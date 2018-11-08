import _ from 'lodash';

const allAvatars = _.times(50, (index) => `/static/images/avatars/${index + 1}.jpg`);

export function randomArray(arr) {
    const index = Math.round(Math.random() * (arr.length - 1));
    return arr[index];
}

export function randomAvatar() {
    return randomArray(allAvatars);
}