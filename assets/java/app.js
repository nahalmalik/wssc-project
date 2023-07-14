const colors = ['#AAC4FF', '#CDF0EA', "#6E85B7", '#68A7AD'];
const labels = ["Data 101", "Data 102", "Data 103", "Data 104"]

function rand_num(){
    return Math.floor( Math.random() * (9999 - 1) + 1 );
}

/**
 * Bar Chart
 */

const default_value = [rand_num(), rand_num(), rand_num(), rand_num()]
const default_value2 = [rand_num(), rand_num(), rand_num(), rand_num()]
const barChart  = new Chart(document.getElementById('bar_chart').getContext('2d'), {
    type: 'bar',
    data:{
        labels:labels,
        datasets: [{
            label: "Sample Bar Chart",
            data: default_value,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options:{
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
})

$('#generate_bar').click(function(){
    var new_values = [rand_num(), rand_num(), rand_num(), rand_num()]
    /**
     * You can get your dynamic values from other page or file
     * i.e
     * $.ajax({
     *  url:'dynamic_data.php?id=1',
     *  dataType:'JSON',
     *  success: function(response){
     *      values = Object.values(response)
     * }
     * })
     */

    /**
     * After getting the new values, Update the dataset's data
     */
    barChart.data.datasets[0].data = new_values

    /**
     * Then Update the Chart
     */

     barChart.update()
})


/**
 * Line Chart
 */

 const lineChart  = new Chart(document.getElementById('line_chart').getContext('2d'), {
     type: 'line',
     data:{
         labels:labels,
         datasets: [{
             label: "Sample Data 1",
             data: default_value,
             borderColor: colors[Math.floor( Math.random() * (3 - 0) + 1 )],
             fill:false,
             tension: 0.2
         },
         {
            label: "Sample Data 2",
            data: default_value2,
            borderColor: colors[Math.floor( Math.random() * (3 - 0) + 1 )],
            fill:false,
            tension: 0.2
        }
        ]
     },
     options:{
         scales: {
             y: {
                 beginAtZero: true
             }
         }
     }
 })

 $('#generate_line').click(function(){
    var new_values = [rand_num(), rand_num(), rand_num(), rand_num()]
    var new_values2 = [rand_num(), rand_num(), rand_num(), rand_num()]
    /**
     * You can get your dynamic values from other page or file
     * i.e
     * $.ajax({
     *  url:'dynamic_data.php?id=1',
     *  dataType:'JSON',
     *  success: function(response){
     *      values = Object.values(response)
     * }
     * })
     */

    /**
     * After getting the new values, Update the dataset's data
     */
    lineChart.data.datasets[0].data = new_values
    lineChart.data.datasets[0].borderColor = colors[Math.floor( Math.random() * (3 - 0) + 1 )]

    lineChart.data.datasets[1].data = new_values2
    lineChart.data.datasets[1].borderColor = colors[Math.floor( Math.random() * (3 - 0) + 1 )]

    /**
     * Then Update the Chart
     */

     lineChart.update()
})

/**
 * pie Chart
 */

 const pieChart  = new Chart(document.getElementById('pie_chart').getContext('2d'), {
    type: 'pie',
    data:{
        labels:labels,
        datasets: [{
            label: "Sample Pie Chart",
            data: default_value,
            backgroundColor: colors,
        }
       ],
       hoverOffset: 4
    },
})

$('#generate_pie').click(function(){
   var new_values = [rand_num(), rand_num(), rand_num(), rand_num()]
   /**
    * You can get your dynamic values from other page or file
    * i.e
    * $.ajax({
    *  url:'dynamic_data.php?id=1',
    *  dataType:'JSON',
    *  success: function(response){
    *      values = Object.values(response)
    * }
    * })
    */

   /**
    * After getting the new values, Update the dataset's data
    */
   pieChart.data.datasets[0].data = new_values

   /**
    * Then Update the Chart
    */

    pieChart.update()
})