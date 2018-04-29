// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Called when the user clicks on the browser action.
function onExecuted(result) {
    console.log(`Back to BG`);
  }
  
  function onError(error) {
    console.log(`Error: ${error}`);
  }
  
chrome.browserAction.onClicked.addListener(function(tab) {
    var action_url = "javascript:window.print();";
    // chrome.tabs.update(tab.id, {url: action_url});
    // console.log(tab);
    chrome.tabs.executeScript(null, {"file": "app.js"}).then(onExecuted,onError);
});