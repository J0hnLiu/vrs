﻿// This is not source. It's jsdoc typedefs for anonymous objects.

/**
 * @typedef {{
 * pageUrl:         string,
 * menuTitle:       string
 * }} VRS_WEBADMIN_SITENAVIGATION_PAGE
 */
VRS_WEBADMIN_SITENAVIGATION_PAGE;

/**
 * @typedef {{
 * pageUrl:         string,
 * pageId:          string,
 * jsonUrl:         string,
 * refreshPeriod:   number
 * }} VRS_WEBADMIN_VIEW_SETTINGS
 */
VRS_WEBADMIN_VIEW_SETTINGS;

/**
 * @typedef {{
 * IsRunning:       bool
 * }} VRS_WEBADMIN_VIEWDATA_BASEVIEW
 */
VRS_WEBADMIN_VIEWDATA_BASEVIEW;

/**
 * @extends VRS_WEBADMIN_VIEWDATA_BASEVIEW
 * @typedef {{
 * Caption:                         string,
 * ProductName:                     string,
 * Version:                         string,
 * Copyright:                       string,
 * Description:                     string,
 * IsMono:                          boolean
 * }} VRS_WEBADMIN_VIEWDATA_ABOUT
 */
VRS_WEBADMIN_VIEWDATA_ABOUT;

/**
 * @typedef {{
 * Id:                              number,
 * Name:                            string,
 * Merged:                          boolean,
 * Polar:                           boolean,
 * Connection:                      number,
 * ConnDesc:                        string,
 * Msgs:                            number,
 * BadMsgs:                         number,
 * Tracked:                         number
 * }} VRS_WEBADMIN_VIEWDATA_FEEDSTATUS
 */
VRS_WEBADMIN_VIEWDATA_FEEDSTATUS;

/**
 * @extends VRS_WEBADMIN_VIEWDATA_BASEVIEW
 * @typedef {{
 * InvalidPluginCount:              number,
 * LogFileName:                     string,
 * NewVersionAvailable:             boolean,
 * NewVersionDownloadUrl:           string,
 * RebroadcastServersConfiguration: string,
 * UPnpEnabled:                     boolean,
 * UPnpRouterPresent:               boolean,
 * UPnpPortForwardingActive:        boolean,
 * WebServerIsOnline:               boolean,
 * WebServerLocalAddress:           string,
 * WebServerNetworkAddress:         string,
 * WebServerExternalAddress:        string,
 * Feeds:                           VRS_WEBADMIN_VIEWDATA_FEEDSTATUS[]
 * }} VRS_WEBADMIN_VIEWDATA_MAIN
 */
VRS_WEBADMIN_VIEWDATA_MAIN;