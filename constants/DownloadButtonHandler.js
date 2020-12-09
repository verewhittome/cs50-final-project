
import React from 'react';

const DownloadButtonHandler = function(url, filename) {
	alert('This is a work in progress!')
}

// const DownloadButtonHandler =  async function(url, filename) {
// 	alert(url)
// 	const callback = downloadProgress => {
// 	  const progress = downloadProgress.totalBytesWritten / downloadProgress.totalBytesExpectedToWrite;
// 	  this.setState({
// 	    downloadProgress: progress,
// 	  });
// 	};

// 	const downloadResumable = FileSystem.createDownloadResumable(
// 	  url,
// 	  FileSystem.documentDirectory + filename,
// 	  {},
// 	  callback
// 	);

// 	try {
// 	  const { url } = await downloadResumable.downloadAsync();
// 	  console.log('Finished downloading to ', url);
// 	} catch (e) {
// 	  console.error(e);
// 	}

// 	try {
// 	  await downloadResumable.pauseAsync();
// 	  console.log('Paused download operation, saving for future retrieval');
// 	  AsyncStorage.setItem('pausedDownload', JSON.stringify(downloadResumable.savable()));
// 	} catch (e) {
// 	  console.error(e);
// 	}

// 	try {
// 	  const { url } = await downloadResumable.resumeAsync();
// 	  console.log('Finished downloading to ', url);
// 	} catch (e) {
// 	  console.error(e);
// 	}

// }

export default DownloadButtonHandler