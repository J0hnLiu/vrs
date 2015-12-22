﻿declare namespace VRS
{
    /**
     * Describes a void function that returns a value of a given type.
     */
    type VoidFuncReturning<T> = () => T;

    /**
     * Describes the content of the AircraftList.json object.
     */
    export interface IAircraftList
    {
        totalAc:          number;
        src:              number;
        showSil:          boolean;
        showFlg:          boolean;
        showPic:          boolean;
        flgW:             number;
        flgH:             number;
        lastDv:           number;
        shtTrlSec:        number;
        stm:              number;
        acList:           IAircraftListAircraft[];
        feeds:            IReceiver[];
        srcFeed:          number;
        configChanged:    boolean;
    }

    /**
     * Describes an aircraft record in the AircraftList.json
     */
    export interface IAircraftListAircraft
    {
        Id:             number;
        TSecs:          number;
        Rcvr:           number;
        Icao:           string;
        Bad:            boolean;
        Reg:            string;
        Alt:            number;
        AltT:           number;
        TAlt:           number;
        Call:           string;
        CallSus:        boolean;
        Lat:            number;
        Long:           number;
        Mlat:           boolean;
        PosTime:        number;
        PosStale:       boolean;
        Spd:            number;
        SpdTyp:         number;
        Vsi:            number;
        VsiT:           number;
        Trak:           number;
        TrkH:           boolean;
        TTrk:           number;
        Man:            string;
        Mdl:            string;
        Type:           string;
        From:           string;
        To:             string;
        Op:             string;
        OpIcao:         string;
        Sqk:            string;
        Help:           boolean;
        Dst:            number;
        Brng:           number;
        WTC:            number;
        Engines:        string;
        EngType:        number;
        EngMount:       number;
        Species:        number;
        Mil:            boolean;
        Cou:            string;
        HasPic:         boolean;
        PicX:           number;
        PicY:           number;
        FlightsCount:   number;
        CMsgs:          number;
        Gnd:            boolean;
        Tag:            string;
        Interested:     boolean;
        Stops:          string[];
        TT:             string;
        Trt:            number;
        Cos:            number[];
        Cot:            number[];
        ResetTrail:     boolean;
        HasSig:         boolean;
        Sig:            number;
        Tisb:           boolean;
        CNum:           string;
        Year:           string;
    }

    /**
     * Describes the parameters passed in the body of a request for an aircraft list.
     */
    export interface IAircraftListRequestBody
    {
        icaos?: string;
    }

    /**
     * Describes the parameters passed in the query string for an aircraft list.
     */
    export interface IAircraftListRequestQueryString
    {
        ldv?:           number;
        feed?:          number;
        lat?:           number;
        lng?:           number;
        selAc?:         number;
        fNBnd?:         number;
        fEBnd?:         number;
        fSBnd?:         number;
        fWBnd?:         number;
        trFmt?:         string;
        refreshTrails?: string;
    }

    /**
     * Describes a thumbnail in IAirportDataThumbnails.
     */
    export interface IAirportDataThumbnail
    {
        image:          string;
        link:           string;
        photographer:   string;
    }

    /**
     * Describes the results of a fetch of airport-data.com thumbnails for an aircraft.
     */
    export interface IAirportDataThumbnails
    {
        status: number;
        error?: string;
        data?:  IAirportDataThumbnail[];
    }

    /**
     * Describes a range of altitudes.
     */
    export interface IAltitudeRange
    {
        lowAlt: number;
        highAlt: number;
    }

    /**
     * Describes a rectangle on the surface of the earth.
     */
    export interface IBounds
    {
        tlLat: number;
        tlLng: number;
        brLat: number;
        brLng: number;
    }

    /**
     * Describes a colour with an optional alpha.
     */
    export interface IColour
    {
        r:   number;
        g:   number;
        b:   number;
        a?:  number;
    }

    /**
     * Describes a latitude and longitude.
     */
    export interface ILatLng
    {
        lat: number;
        lng: number;
    }

    /**
     * The interface that plugins that wrap a map must implement.
     */
    export interface IMap extends ISelfPersist<IMapSaveState>
    {
        //
        // Properties
        isOpen: () => boolean;      // True if the map has been successfully loaded
        isReady: () => boolean;     // True if the map has been successfully loaded, initialised and is ready for use.

        getBounds: () => IBounds;
        getDraggable: () => boolean;
        getNative: () => any;
        getNativeType: () => string;
        getScrollWheel: () => boolean;
        getStreetView: () => boolean;

        getCenter: () => ILatLng;
        setCenter: (center: ILatLng) => void;

        getMapType: () => MapTypeEnum;
        setMapType: (mapType: MapTypeEnum) => void;

        getZoom: () => number;
        setZoom: (zoom: number) => void;

        //
        // Map events
        unhook: (hookResult: IEventHandleJQueryUI) => void;
        hookBoundsChanged: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookCenterChanged: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookClicked: (callback: (event?: Event, data?: IMapMouseEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookDoubleClicked: (callback: (event?: Event, data?: IMapMouseEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookIdle: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookMapTypeChanged: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookRightClicked: (callback: (event?: Event, data?: IMapMouseEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookTilesLoaded: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookZoomChanged: (callback: (event?: Event) => void, forceThis?: Object) => IEventHandleJQueryUI;

        //
        // Child object events
        hookMarkerClicked: (callback: (event?: Event, data?: IMapMarkerEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookMarkerDragged: (callback: (event?: Event, data?: IMapMarkerEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;
        hookInfoWindowClosedByUser: (callback: (event?: Event, data?: IMapInfoWindowEventArgs) => void, forceThis?: Object) => IEventHandleJQueryUI;

        //
        // Basic methods
        open: (options?: IMapOpenOptions) => void;
        refreshMap: () => void;
        panTo: (mapCenter: ILatLng) => void;
        fitBounds: (bounds: IBounds) => void;

        //
        // Map marker methods
        addMarker: (id: string | number, userOptions: IMapMarkerSettings) => IMapMarker;
        getMarker: (idOrMarker: string | number | IMapMarker) => IMapMarker;
        destroyMarker: (idOrMarker: string | number | IMapMarker) => void;
        centerOnMarker: (idOrMarker: string | number | IMapMarker) => void;

        //
        // Map polyline methods
        addPolyline: (id: string | number, userOptions: IMapPolylineSettings) => IMapPolyline;
        getPolyline: (idOrPolyline: string | number | IMapPolyline) => IMapPolyline;
        destroyPolyline: (idOrPolyline: string | number | IMapPolyline) => void;
        trimPolyline: (idOrPolyline: string | number | IMapPolyline, countPoints: number, fromStart: boolean) => IMapTrimPolylineResult;
        removePolylinePointAt: (idOrPolyline: string | number | IMapPolyline, index: number) => void;
        appendToPolyline: (idOrPolyline: string | number | IMapPolyline, path: ILatLng[], toStart: boolean) => void;
        replacePolylinePointAt: (idOrPolyline: string | number | IMapPolyline, index: number, point: ILatLng) => void;

        //
        // Map polygon methods
        addPolygon: (id: string | number, userOptions: IMapPolygonSettings) => IMapPolygon;
        getPolygon: (idOrPolygon: string | number | IMapPolygon) => IMapPolygon;
        destroyPolygon: (idOrPolygon: string | number | IMapPolygon) => void;

        //
        // Map circle methods
        addCircle: (id: string | number, userOptions: IMapCircleSettings) => IMapCircle;
        getCircle: (idOrCircle: string | number | IMapCircle) => IMapCircle;
        destroyCircle: (idOrCircle: string | number | IMapCircle) => void;

        //
        // InfoWindow methods
        getUnusedInfoWindowId: () => string;
        addInfoWindow: (id: string | number, userOptions: IMapInfoWindowSettings) => IMapInfoWindow;
        getInfoWindow: (idOrInfoWindow: string | number | IMapInfoWindow) => IMapInfoWindow;
        destroyInfoWindow: (idOrInfoWindow: string | number | IMapInfoWindow) => void;
        openInfoWindow: (idOrInfoWindow: string | number | IMapInfoWindow, mapMarker?: IMapMarker) => void;
        closeInfoWindow: (idOrInfoWindow: string | number | IMapInfoWindow) => void;

        //
        // Map control methods
        addControl: (element: JQuery | HTMLElement, mapPosition: MapPositionEnum) => void;
    }

    /**
     * Describes a circle drawn on the map.
     */
    export interface IMapCircle
    {
        id:     string | number;
        tag:    any;

        getDraggable: () => boolean;
        setDraggable: (draggable: boolean) => void;

        getEditable: () => boolean;
        setEditable: (editable: boolean) => void;

        getVisible: () => boolean;
        setVisible: (visible: boolean) => void;

        getBounds: () => IBounds;

        getCenter: () => ILatLng;
        setCenter: (value: ILatLng) => void;

        getRadius: () => number;
        setRadius: (radius: number) => void;

        getFillColor: () => string;
        setFillColor: (colour: string) => void;

        getFillOpacity: () => number;
        setFillOpacity: (opacity: number) => void;

        getStrokeColor: () => string;
        setStrokeColor: (colour: string) => void;

        getStrokeOpacity: () => number;
        setStrokeOpacity: (colour: number) => void;

        getStrokeWeight: () => number;
        setStrokeWeight: (weight: number) => void;

        getZIndex: () => number;
        setZIndex: (zIndex: number) => void;
    }

    /**
     * The settings that can be used when drawing a circle on a map.
     */
    export interface IMapCircleSettings
    {
        center?:            ILatLng;
        clickable?:         boolean;
        draggable?:         boolean;
        editable?:          boolean;
        fillColor?:         string;        // CSS colour
        fillOpacity?:       number;        // Value between 0 and 1 inclusive
        radius?:            number;        // In metres
        strokeColor?:       string;        // CSS colour
        strokeOpacity?:     number;        // Value between 0 and 1 inclusive
        strokeWeight?:      number;        // Weight in pixels.
        visible?:           boolean;
        zIndex?:            number;
        tag?:               any;
    }

    /**
     * Describes a control that can be added to a map.
     */
    export interface IMapControl
    {
        control:    JQuery;
        position:   MapPositionEnum;
    }

    /**
     * Describes an icon drawn onto the map.
     */
    export interface IMapIcon
    {
        anchor?:        IPoint;
        origin?:        IPoint;
        scaledSize:     ISize;
        size:           ISize;
        url:            string;
        labelAnchor?:   IPoint;
    }

    /**
     * Describes an information panel attached to a marker on the map.
     */
    export interface IMapInfoWindow
    {
        id:     string | number;
        tag:    any;
        isOpen: boolean;

        getContent: () => Element;
        setContent: (content: Element) => void;

        getDisableAutoPan: () => boolean;
        setDisableAutoPan: (disable: boolean) => void;

        getMaxWidth: () => number;
        setMaxWidth: (maxWidth: number) => void;

        getPixelOffset: () => ISize;
        setPixelOffset: (offset: ISize) => void;

        getPosition: () => ILatLng;
        setPosition: (position: ILatLng) => void;

        getZIndex: () => number;
        setZIndex: (zIndex: number) => void;
    }

    /**
     * The args passed to map info window event handlers.
     */
    export interface IMapInfoWindowEventArgs
    {
        id: string | number;
    }

    /**
     * The settings that can be applied when creating a new MapInfoWindow.
     */
    export interface IMapInfoWindowSettings
    {
        content?:           Element;
        disableAutoPan?:    boolean;
        maxWidth?:          number;
        pixelOffset?:       ISize;
        position?:          ILatLng;
        zIndex?:            number;
        tag?:               any;
    }

    /**
     * Describes an abstract map marker.
     */
    export interface IMapMarker
    {
        id:                 string|number;
        tag:                any;

        getDraggable: () => boolean;
        setDraggable: (draggable: boolean) => void;

        getIcon:    () => IMapIcon;
        setIcon:    (icon: IMapIcon) => void;

        getPosition: () => ILatLng;
        setPosition: (position: ILatLng) => void;

        getTooltip: () => string;
        setTooltip: (tooltip: string) => void;

        getVisible: () => boolean;
        setVisible: (visible: boolean) => void;

        getZIndex: () => number;
        setZIndex: (zIndex: number) => void;

        /*
         * Map marker with label fields and functions
         */
        isMarkerWithLabel:  boolean;

        getLabelVisible: () => boolean;
        setLabelVisible: (visible: boolean) => void;

        getLabelAnchor: () => IPoint;
        setLabelAnchor: (point: IPoint) => void;

        getLabelContent: () => string;
        setLabelContent: (content: string) => void;
    }

    /**
     * The args passed for map marker events.
     */
    export interface IMapMarkerEventArgs
    {
        id: string | number;
    }

    /**
     * The settings passed when creating new map markers.
     */
    export interface IMapMarkerSettings
    {
        clickable?:             boolean;
        draggable?:             boolean;
        flat?:                  boolean;
        optimized?:             boolean;
        raiseOnDrag?:           boolean;
        visible?:               boolean;
        animateAdd?:            boolean;
        position?:              ILatLng;
        icon?:                  IMapIcon;
        tooltip?:               string;
        zIndex?:                number;
        tag?:                   any;
        useMarkerWithLabel?:    boolean;
        mwlLabelInBackground?:  boolean;
        mwlLabelClass?:         string;
    }

    /**
     * The event args for a mouse event on a map.
     */
    export interface IMapMouseEventArgs
    {
        mouseEvent: Event;
    }

    /**
     * The options that can be passed when opening the map after it has loaded.
     */
    export interface IMapOpenOptions
    {
        zoom?:              number;
        center?:            ILatLng;
        mapTypeControl?:    boolean;
        mapTypeId?:         MapTypeEnum;
        streetViewControl?: boolean;
        scrollwheel?:       boolean;
        scaleControl?:      boolean;
        draggable?:         boolean;
        showHighContrast?:  boolean;
        controlStyle?:      MapControlStyleEnum;
        controlPosition?:   MapPositionEnum;
        mapControls?:       IMapControl[];
    }

    /**
     * The options that can be passed when creating a new instance of a map.
     */
    // Ideally this would have been an extension of IMapOpenOptions, but this was originally written
    // in native JavaScript and there are some differences in field names.
    export interface IMapOptions
    {
        key?:                   string;
        version?:               string;
        sensor?:                boolean;
        libraries?:             string[];
        loadMarkerWithLabel?:   boolean;
        openOnCreate?:          boolean;
        waitUntilReady?:        boolean;
        zoom?:                  number;
        center?:                ILatLng;
        showMapTypeControl?:    boolean;
        mapTypeId?:             MapTypeEnum;
        streetViewControl?:     boolean;
        scrollwheel?:           boolean;
        scaleControl?:          boolean;
        draggable?:             boolean;
        controlStyle?:          MapControlStyleEnum;
        controlPosition?:       MapPositionEnum;
        pointsOfInterest?:      boolean;
        showHighContrast?:      boolean;
        mapControls?:           IMapControl[];
        afterCreate?:           (map: IMap) => void;
        afterOpen?:             (map: IMap) => void;
        name?:                  string;
        useStateOnOpen?:        boolean;
        autoSaveState?:         boolean;
        useServerDefaults?:     boolean;
    }

    /**
     * Describes a polygon on a map.
     */
    export interface IMapPolygon
    {
        id:     string | number;
        tag:    any;

        getDraggable: () => boolean;
        setDraggable: (draggable: boolean) => void;

        getEditable: () => boolean;
        setEditable: (editable: boolean) => void;

        getVisible: () => boolean;
        setVisible: (visible: boolean) => void;

        getFirstPath: () => ILatLng[];
        setFirstPath: (path: ILatLng[]) => void;

        getPaths: () => ILatLng[][];
        setPaths: (paths: ILatLng[][]) => void;

        getClickable: () => boolean;
        setClickable: (clickable: boolean) => void;

        getFillColour: () => string;
        setFillColour: (colour: string) => void;

        getFillOpacity: () => number;
        setFillOpacity: (opacity: number) => void;

        getStrokeColour: () => string;
        setStrokeColour: (colour: string) => void;

        getStrokeOpacity: () => number;
        setStrokeOpacity: (colour: number) => void;

        getStrokeWeight: () => number;
        setStrokeWeight: (weight: number) => void;

        getZIndex: () => number;
        setZIndex: (zIndex: number) => void;
    }

    /**
     * The settings that can be applied to a map polygon.
     */
    export interface IMapPolygonSettings
    {
        paths:                   ILatLng[][];
        clickable?:              boolean;
        draggable?:              boolean;
        editable?:               boolean;
        fillColour?:             string;        // CSS colour string
        fillOpacity?:            number;        // Value between 0 and 1 inclusive
        geodesic?:               boolean;
        strokeColour?:           string;        // CSS colour string
        strokeOpacity?:          number;        // Value between 0 and 1 inclusive
        strokeWeight?:           number;        // Weight in pixels
        visible?:                boolean;
        zIndex?:                 number;
        tag?:                    any;
    }

    /**
     * Describes a series of connected lines on a map.
     */
    export interface IMapPolyline
    {
        id:     string | number;
        tag:    any;

        getDraggable: () => boolean;
        setDraggable: (draggable: boolean) => void;

        getEditable: () => boolean;
        setEditable: (editable: boolean) => void;

        getVisible: () => boolean;
        setVisible: (visible: boolean) => void;

        getStrokeColour: () => string;
        setStrokeColour: (colour: string) => void;

        getStrokeOpacity: () => number;
        setStrokeOpacity: (colour: number) => void;

        getStrokeWeight: () => number;
        setStrokeWeight: (weight: number) => void;

        getPath: () => ILatLng[];
        setPath: (path: ILatLng[]) => void;

        getFirstLatLng: () => ILatLng;
        getLastLatLng:  () => ILatLng;
    }

    /**
     * The settings that can be applied to a map polyline.
     */
    export interface IMapPolylineSettings
    {
        path?:              ILatLng[];
        clickable?:         boolean;
        draggable?:         boolean;
        editable?:          boolean;
        geodesic?:          boolean;
        visible?:           boolean;
        strokeColour?:      string;     // CSS colour string
        strokeOpacity?:     number;     // Value between 0 and 1 inclusive
        strokeWeight?:      number;     // Weight in pixels
        zIndex?:            number;
        tag?:               any;
    }

    /**
     * The state that is recorded for a map.
     */
    export interface IMapSaveState
    {
        zoom:       number;
        center:     ILatLng;
        mapTypeId:  MapTypeEnum;
    }

    /**
     * The interface of the object returned by IMap.trimPolyline()
     */
    export interface IMapTrimPolylineResult
    {
        emptied:        boolean;
        countRemoved:   number;
    }

    /**
     * Describes a value that may or may not be a percentage.
     */
    export interface IPercentValue
    {
        value:      number;
        isPercent:  boolean;
    }

    /**
     * Describes a point.
     */
    export interface IPoint
    {
        x: number;
        y: number;
    }

    /**
     * Describes a receiver.
     */
    export interface IReceiver
    {
        id?:          number;           // The default receiver has an undefined ID
        name:         string;
        polarPlot?:   boolean;
    }

    /**
     * An airport in the report result JSON.
     */
    export interface IReportAirport
    {
        code:       string;
        name:       string;
        fullName:   string;
    }

    /**
     * Describes a route in a report.
     */
    export interface IReportRoute
    {
        fIdx:            number;
        sIdx:            number[];
        tIdx:            number;
        from:            IReportAirport;
        via:             IReportAirport[];
        to:              IReportAirport;
    }

    /**
     * The interface that objects that can self-persist must implement. The type parameter is the type of the
     * object that holds the values that are persisted.
     */
    export interface ISelfPersist<T>
    {
        saveState: () => void;
        loadState: () => T;
        applyState: (config: T) => void;
        loadAndApplyState: () => void;
    }

    /**
     * The representation of a serialised filter.
     */
    export interface ISerialisedFilter
    {
        property:       any;
        valueCondition: ISerialisedCondition;
    }

    /**
     * The representation of a serialised condition in a filter.
     */
    export interface ISerialisedCondition
    {
        condition:    FilterConditionEnum;
        reversed:     boolean;
    }

    /**
     * The representation of a one-value condition in a serialised filter.
     */
    export interface ISerialisedOneValueCondition extends ISerialisedCondition
    {
        value:        any;
    }

    /**
     * The representation of a two-value condition in a serialised filter.
     */
    export interface ISerialisedTwoValueCondition extends ISerialisedCondition
    {
        value1:       any;
        value2:       any;
    }

    /**
     * Describes a size.
     */
    export interface ISize
    {
        width:    number;
        height:   number;
    }

    /**
     * Describes a time without reference to a date.
     */
    export interface ITime
    {
        hours:      number;
        minutes:    number;
        seconds:    number;
    }
} 