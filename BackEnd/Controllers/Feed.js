const Feed = require('../Models/Feed')

 
//------------------------------FOR GETTING ALL FEEDS--------------------------------
exports.getAllFeeds = async (req, resp, next) => {
    const feeds = await Feed.find({ createdBy: req.user.id });
    resp.status(200).json(feeds);
}



exports.postFeed = async(req,resp,next) =>
{
    const newFeed = new Feed({photo:req.file.filename,caption:req.body.caption})
    newFeed.createdBy = req.user.id
    console.log(req.user.id);

    try {
        const feed = await newFeed.save();
        resp.status(200).json(feed);
    } catch (error) {
        error.status = 400;
        next(error);
    }
    // resp.send('uploaded')
}