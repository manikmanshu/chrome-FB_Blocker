window.onload = function () {

    chrome.storage.sync.get('settings', function(data) {
        data.settings = data.settings || [];
        var value = data.settings.join('\n');
        document.getElementById('block-list').value = value;
    });

    var element = document.getElementById('save-settings');
    element.addEventListener("click", saveSettings);

}

function saveSettings () {

    var settings = document.getElementById('block-list').value;

    settings = settings.replaceAll(/\n/g, ' ').trim().split(' ').filter(x => x);
    chrome.storage.sync.set({ settings: settings });

}