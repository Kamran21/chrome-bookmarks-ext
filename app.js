console.log(document.location);

var url=document.location.href;

console.log('Turning ' + url + ' red!');

var domain = `http://xyz${url}xxxx`;

var images= document.getElementsByTagName('img');
images=[].slice.call(images);
console.log(images);
if( images ){
    
    images=images.filter( img => (img.width > 150) && (img.height > 150) );

    //Create Great Pics Folder
    chrome.bookmarks.create({'parentId': bookmarkBar.id, 'title': 'Great Pics'},function(newFolder) {
        
        console.log("added folder: " + newFolder.title);
        
        //Create Page URL Folder
        chrome.bookmarks.create({'parentId': bookmarkBar.id, 'title': url},function(newFolder) {
            
            console.log("added folder: " + newFolder.title);
            
            //Create a bookmark
            images.forEeach( img => {
                chrome.bookmarks.create({'parentId': extensionsFolderId,
                            'title': domain + img.fullPath.split("/").pop(),
                            'url': img.src});
            });

        });
    });
}
    