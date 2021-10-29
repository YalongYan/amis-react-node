export const editorInitValue = {
  type: 'page',
  data: {
    id: 1,
  },
  body: [
    {
      type: 'form',
      api: 'https://3xsw4ap8wah59.cfc-execute.bj.baidubce.com/api/amis-mock/mock2/saveForm?waitSeconds=2',
      title: '',
      mode: 'inline',
      autoFocus: false,
      body: [
        {
          type: 'input-date-range',
          label: '选择日期',
          name: 'date-range',
        },
        {
          type: 'select',
          label: '渠道类型',
          name: 'select',
          options: [
            {
              label: '选项A',
              value: 'A',
            },
            {
              label: '选项B',
              value: 'B',
            },
          ],
        },
        {
          type: 'select',
          label: '渠道名称',
          name: 'select',
          options: [
            {
              label: '选项A',
              value: 'A',
            },
            {
              label: '选项B',
              value: 'B',
            },
          ],
        },
        {
          type: 'input-text',
          label: '渠道包名',
          name: 'text',
        },
        {
          type: 'button-toolbar',
          buttons: [
            {
              type: 'submit',
              label: '查询',
              level: 'success',
            },
            {
              type: 'reset',
              label: '重置',
            },
          ],
        },
      ],
      actions: [
        {
          type: 'button',
          label: '查询',
          href: 'http://www.baidu.com',
          level: 'success',
        },
        {
          type: 'reset',
          label: '重置',
        },
      ],
    },
    {
      type: 'card',
      header: {
        title: '30日 |  设备初始激活趋势图',
        subTitle: '09-01初始激活',
        desc: '12121人',
        highlight: '',
      },
      body: [],
      actions: [],
    },
    {
      type: 'chart',
      config: {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
          },
        },
        legend: {
          data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'],
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        yAxis: {
          type: 'value',
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
          {
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: [320, 302, 301, 334, 390, 330, 320],
          },
          {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
              show: true,
            },
            emphasis: {
              focus: 'series',
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
        ],
      },
      replaceChartOption: true,
    },
    {
      type: 'grid',
      columns: [],
    },
    {
      type: 'container',
      body: [
        {
          type: 'plain',
          tpl: '按区间',
          inline: false,
        },
        {
          type: 'crud',
          api: 'https://houtai.baidu.com/api/sample',
          headerToolbar: [
            {
              type: 'export-csv',
              align: 'right',
            },
          ],
          columns: [
            {
              name: 'id',
              label: 'ID',
            },
            {
              name: 'engine',
              label: 'Rendering engine',
            },
            {
              name: 'browser',
              label: 'Browser',
            },
            {
              name: 'platform',
              label: 'Platform(s)',
            },
            {
              name: 'version',
              label: 'Engine version',
            },
            {
              name: 'grade',
              label: 'CSS grade',
            },
          ],
          perPageAvailable: [10],
          messages: {},
          filter: null,
          syncLocation: false,
        },
        {
          type: 'plain',
          tpl: '按天',
          inline: false,
        },
        {
          type: 'crud',
          api: 'https://houtai.baidu.com/api/sample',
          headerToolbar: [
            {
              type: 'export-csv',
              align: 'right',
            },
          ],
          columns: [
            {
              name: 'id',
              label: 'ID',
            },
            {
              type: 'container',
              body: [
                {
                  type: 'tpl',
                  tpl: '内容',
                  inline: false,
                },
              ],
              label: '容器',
            },
            {
              name: 'engine',
              label: 'Rendering engine',
            },
            {
              name: 'browser',
              label: 'Browser',
            },
            {
              name: 'platform',
              label: 'Platform(s)',
            },
            {
              name: 'version',
              label: 'Engine version',
            },
            {
              name: 'grade',
              label: 'CSS grade',
            },
          ],
          perPageAvailable: [10],
          messages: {},
          filter: null,
          syncLocation: false,
          footerToolbar: [],
        },
      ],
    },
  ],
};
