function FindProxyForURL(url, host) {
    PROXY = "PROXY devenv.pacter.com:8080"

    if (shExpMatch(host,"*.pacter.com")) {
        return PROXY;
    }

    return "DIRECT";
}
