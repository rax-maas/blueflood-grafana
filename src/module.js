import {BluefloodDatasource} from './datasource';
import {BluefloodDatasourceQueryCtrl} from './query_ctrl';

class BluefloodConfigCtrl {}
BluefloodConfigCtrl.templateUrl = 'partials/config.html';


class BluefloodAnnotationsQueryCtrl {}
BluefloodAnnotationsQueryCtrl.templateUrl = 'partials/annotations.editor.html'

export {
    BluefloodDatasource as Datasource,
    BluefloodDatasourceQueryCtrl as QueryCtrl,
    BluefloodConfigCtrl as ConfigCtrl,
    BluefloodAnnotationsQueryCtrl as AnnotationsQueryCtrl
};