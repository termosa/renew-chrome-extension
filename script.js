// avoid polluting the global JavaScript namespace
(function(c) {
  if (!c.browserAction) return;

  c.browserAction.onClicked.addListener(function(tab) {
    c.tabs.duplicate(tab.id);
    c.tabs.remove(tab.id);
  });
}(chrome));
