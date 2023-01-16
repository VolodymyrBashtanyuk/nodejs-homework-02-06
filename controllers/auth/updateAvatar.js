const fs = require('fs/promises');
const path = require('path');
const Jimp = require('jimp');



const { User } = require('../../modules');

const avatarsDir = path.join(__dirname, '../../', 'public', 'avatars')



const updateAvatar = async (req, res, next) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id } = req.user;

    const avatarPic = await Jimp.read(tempUpload)
    await avatarPic
        .resize(250, 250)
        .writeAsync(tempUpload);

    const fileName = `${_id}_${originalname}`
    const resultUpload = path.join(avatarsDir, fileName);
    await fs.rename(tempUpload, resultUpload);
    const avatarURL = path.join('avatars', fileName);
    await User.findByIdAndUpdate(_id, { avatarUrl: avatarURL });

    res.json({
            status: "ok",
            code: 200,
            message: "Add new avatar",
            user: {
                avatarURL,
            }
        })

}

module.exports = updateAvatar;