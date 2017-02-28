var channelName = 'insert-yourchannel-name-here';  
var vidHeight = 400;  
var vidWidth = 500;  
var vidMaxResult = 20; // Maximum can be 50
  
$(document).ready(function () {  
    $.get("https://www.googleapis.com/youtube/v3/channels", {  
        part: 'contentDetails',  
        forUsername: channelName,  
        key: 'insert-your-api-key-here' //Browser API Key  
    },  
        function (data) {  
            $.each(data.items, function (i, item) {  
                console.log(item); // See in Browser Console  
                pid = item.contentDetails.relatedPlaylists.uploads;  
                getVideos(pid);  
            })  
        }  
        );  
    function getVideos(pid)  
    {  
        $.get("https://www.googleapis.com/youtube/v3/playlistItems", {  
            part: 'snippet',  
            maxResults: vidMaxResult,  
            playlistId:pid,  
            key: 'insert-your-api-key-here' //Browser API Key  
        },  
       function (data) {  
           var outputVideo;  
           $.each(data.items, function (i, item) {  
               console.log(item); // See in Browser Console  
               vidId = item.snippet.resourceId.videoId;  
               outputVideo = '<li><iframe height="' + vidHeight + '" width="' + vidWidth + '" src=\"//www.youtube.com/embed/' + vidId + '"> </iframe></li>';  
  
               //Append to result list  
               $('#result').append(outputVideo);  
           })  
       }  
       );  
    }  
});  
