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
namespace TencentCloud\Chdfs\V20190718\Models;
use TencentCloud\Common\AbstractModel;

/**
 * @method string getFileSystemName() 获取文件系统名称
 * @method void setFileSystemName(string $FileSystemName) 设置文件系统名称
 * @method integer getCapacityQuota() 获取文件系统容量（byte），下限为1M，上限为1P，且必须是1M的整数倍
 * @method void setCapacityQuota(integer $CapacityQuota) 设置文件系统容量（byte），下限为1M，上限为1P，且必须是1M的整数倍
 * @method string getDescription() 获取文件系统描述
 * @method void setDescription(string $Description) 设置文件系统描述
 */

/**
 *CreateFileSystem请求参数结构体
 */
class CreateFileSystemRequest extends AbstractModel
{
    /**
     * @var string 文件系统名称
     */
    public $FileSystemName;

    /**
     * @var integer 文件系统容量（byte），下限为1M，上限为1P，且必须是1M的整数倍
     */
    public $CapacityQuota;

    /**
     * @var string 文件系统描述
     */
    public $Description;
    /**
     * @param string $FileSystemName 文件系统名称
     * @param integer $CapacityQuota 文件系统容量（byte），下限为1M，上限为1P，且必须是1M的整数倍
     * @param string $Description 文件系统描述
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
        if (array_key_exists("FileSystemName",$param) and $param["FileSystemName"] !== null) {
            $this->FileSystemName = $param["FileSystemName"];
        }

        if (array_key_exists("CapacityQuota",$param) and $param["CapacityQuota"] !== null) {
            $this->CapacityQuota = $param["CapacityQuota"];
        }

        if (array_key_exists("Description",$param) and $param["Description"] !== null) {
            $this->Description = $param["Description"];
        }
    }
}
