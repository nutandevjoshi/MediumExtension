// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.runtime.onInstalled.addListener(function () {
    // open popup after installation
    chrome.tabs.create({url: "https://www.youtube.com/watch?v=aqTCrRbDL20&feature=emb_title"}, function (tab) {
    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: {hostEquals: 'medium.com'},
                //medium.com , developer.chrome.com
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});