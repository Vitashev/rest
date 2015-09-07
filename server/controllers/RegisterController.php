<?php

namespace app\controllers;

use yii\rest\ActiveController;

class RegisterController extends ActiveController
{
    // указываем класс модели, который будет использоваться
    public $modelClass = 'app\models\Register';

    public function behaviors()
    {
        return
            \yii\helpers\ArrayHelper::merge(parent::behaviors(), [
                'corsFilter' => [
                    'class' => \yii\filters\Cors::className(),
                ],
            ]);
    }
}