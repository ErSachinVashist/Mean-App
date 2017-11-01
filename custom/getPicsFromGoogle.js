var Scraper = require ('images-scraper')
    , google = new Scraper.Google();

var each = require('async-each-series');
const download = require('image-downloader')

const options = {
    dest: __dirname+'/downloads'
}
module.exports=function (Pictures,req,res) {
    google.list({
        keyword: req.query.imgName,
        num: 15,
        detail: true,
        nightmare: {
            show: false
        }
    })
        .then(function (data) {
            console.log('scraped images ......')
            each(data, function(pics, next) {
                pics.keyword=req.query.imgName
                Pictures.create(pics).then(function (resp) {
                    console.log('posted image >>>>',pics.url)
                    options['url']=pics.url
                    download.image(options)
                        .then(function(filename,image){
                        console.log('File saved to', filename.filename)
                            next()
                       }).catch(function(err){
                        throw err
                        })
                })
            }, function (err) {
                if(err){
                    res.send(err)
                }
                else{
                    res.send(data)
                }
            });

        })
        .catch(function(err) {
        console.log('err', err);
        });

    // google.on('result', function (item) {
    //     console.log('out', item);
    // });

}

