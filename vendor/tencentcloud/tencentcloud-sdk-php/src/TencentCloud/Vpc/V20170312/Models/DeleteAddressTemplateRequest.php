<?php
/*
 * Copyright (c) 2017-2018 THL A29 Limited, a Tencent company. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
namespace TencentCloud\Vpc\V20170312\Models;
use TencentCloud\Common\AbstractModel;

/**
 * @method string getAddressTemplateId() 获取IP地址模板实例ID，例如：ipm-09o5m8kc。
 * @method void setAddressTemplateId(string $AddressTemplateId) 设置IP地址模板实例ID，例如：ipm-09o5m8kc。
 */

/**
 *DeleteAddressTemplate请求参数结构体
 */
class DeleteAddressTemplateRequest extends AbstractModel
{
    /**
     * @var string IP地址模板实例ID，例如：ipm-09o5m8kc。
     */
    public $AddressTemplateId;
    /**
     * @param string $AddressTemplateId IP地址模板实例ID，例如：ipm-09o5m8kc。
     */
    function __construct()
    {

    }
    /**
     * For internal only. DO NOT USE IT.
     */
    public function deserialize($param)
    {
        if ($param === null) {
            return;
        }
        if (array_key_exists("AddressTemplateId",$param) and $param["AddressTemplateId"] !== null) {
            $this->AddressTemplateId = $param["AddressTemplateId"];
        }
    }
}
