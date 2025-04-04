const ImageUrl = (avatar: string) => {
    if (avatar.startsWith('./assets/images/avatars/')) {
        return `/${avatar}`
    }
    return avatar
}

export default ImageUrl