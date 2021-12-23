import React, {Component} from 'react';
import data from '../data/meals.json';

export default class Header  extends Component {
    
    constructor(props){
        super(props);
        this.get_distinct_values_cuisine = this.get_distinct_values_cuisine.bind(this);
        this.get_distinct_values_difficulty = this.get_distinct_values_difficulty.bind(this);
        this.state = {
            level: "first", 
            filters: [], 
            values: [], 
            meal: false, 
            meals: [], 
            cuisines: false,
            difficulties: false,
            showSecondFilter: false,
            firstFilterApplied: false,
            error: false,
            allFiltersApplied: false,
            showFirst: true
        };
        this.button_rendering = this.button_rendering.bind(this);
        this.filter = this.filter.bind(this);
        this.random = this.random.bind(this);
        this.apply_filter = this.apply_filter.bind(this);
        this.renderFilter = this.renderFilter.bind(this);
        this.renderMeals = this.renderMeals.bind(this);
        this.filteredData = this.filteredData.bind(this);
        this.apply_second_filter = this.apply_second_filter.bind(this);
        this.renderSecondFilter = this.renderSecondFilter.bind(this);
        this.get_meals = this.get_meals.bind(this);
        this.get_distinct_values_second = this.get_distinct_values_second.bind(this);
        this.selectMeal = this.selectMeal.bind(this);
        this.earlyRenderMeals = this.earlyRenderMeals.bind(this);
        this.getIngredients = this.getIngredients.bind(this);
    }

    render(){
        return (
            <section id="dinner" className="s-about target-section">
            <div className="row narrow section-intro has-bottom-sep">
                <div className="col-full text-center">
                <h3>Dinner Selector</h3>
                <h1>What do we want for Dinner?</h1>
                <h4 className="lead">Answer the following questions and we will tell you what to make for dinner.</h4>
                <hr/>
                
                <div>
                    {this.state.showFirst ? this.button_rendering() : ""}
                </div>
                <div>
                    <p>
                        {this.state.cuisines ? <div><p>Which cuisine do you want? </p>{
                            this.get_distinct_values_cuisine().map((cuisine) => <button onClick={this.apply_filter.bind(this, cuisine)}>{cuisine}</button>) 
                            } 
                            </div>: ""
                        }
                    </p>
                    <p>
                        {this.state.difficulties ? <div><p>Which level of difficulty do you want? </p>{
                            this.get_distinct_values_difficulty().map((diff) => <button onClick={this.apply_filter.bind(this, diff)}>{diff}</button>) 
                            } 
                            </div>: ""
                        }
                    </p>
                </div>
                <div>
                    {this.state.firstFilterApplied ?
                        <div>
                            <p>There are {this.filteredData(this.state.filters[0], this.state.values[0]).length} meals within this filter. Would you like to apply a second filter or choose from these options?</p>
                            <button onClick={() => this.renderFilter()}>Apply a second filter</button>
                            <button onClick={() => this.earlyRenderMeals()}>Choose from these options</button>
                        </div>:
                        <div>
                            {this.state.error ?
                            <p>There was an error in applying the filter. Please refresh and try again.</p>
                            : ""}
                        </div>
                    }
                </div>
                <div>
                    {
                        this.state.showSecondFilter ? this.renderSecondFilter():""
                    }
                </div>
                <div>
                    {this.state.allFiltersApplied ? this.renderMeals(): ""}
                    <br/>
                </div>
                <div>
                    {this.state.meal ? 
                    <div>
                        <h3>Dinner Selection</h3>
                        <br/>
                        <p>The dinner selection is: <strong>{this.state.meals[0]}</strong></p>
                        <p>Here are the ingredients: </p>
                        <div>
                            <ul>
                                {this.getIngredients()}
                            </ul>
                        </div>
                    </div>: ""
                    }
                </div>
                </div>
            </div>
            </section>
        );
    }

    get_distinct_values_cuisine(){
        //this.get_distinct_values().map((cuisine) => <button>{cuisine}</button>)
        var valueArray = data.map((item)=>item.Cuisine);
        var setOfValue = new Set(valueArray);
        return [...setOfValue]
    }
    get_distinct_values_difficulty(){
        //this.get_distinct_values().map((cuisine) => <button>{cuisine}</button>)
        var valueArray = data.map((item)=>item.Difficulty);
        var setOfValue = new Set(valueArray);
        return [...setOfValue].sort()
    }

    FirstButtons(){
        return (
            <div>
                <p>What filter do you want to apply first?</p>
                <button onClick={this.filter.bind(this, "Cuisine")}>Cuisine</button>
                <button onClick={this.filter.bind(this, "Difficulty")}>Difficulty</button>
                <br/>
                <button onClick={this.random}>Random Meal Generator</button>
            </div>
        )
    }

    button_rendering(){
        return this.FirstButtons();
    }

    filteredData(filter, value){
        var meals = data.map((item)=>item.Meal);
        if (filter == "Cuisine"){
            var valueArray = data.map((item)=>item.Cuisine);
            var temp = []
            for(var i = 0; i<valueArray.length; i++){
                if(valueArray[i] == value){
                    temp.push(meals[i]);
                }
            }
            var setOfValue = new Set(temp);
            return [...setOfValue]
        }else{
            var valueArray = data.map((item)=>item.Difficulty);
            var temp = []
            for(var i = 0; i<valueArray.length; i++){
                if(valueArray[i] == value){
                    temp.push(meals[i]);
                }
            }
            var setOfValue = new Set(temp);
            return [...setOfValue].sort()
        }
        
    }

    get_distinct_values_second(){
        //this.get_distinct_values().map((cuisine) => <button>{cuisine}</button>)
        var cuisines = data.map((item)=>item.Cuisine);
        var diffs = data.map((item) => item.Difficulty);
        var valueArray = [];
        if (this.state.filters[1] == "Cuisine"){
            for(var i = 0; i < cuisines.length; i++){
                if(diffs[i] == this.state.values[0]){
                    valueArray.push(cuisines[i]);
                }
            }
        }else{
            for(var i = 0; i < diffs.length; i++){
                if(cuisines[i] == this.state.values[0]){
                    valueArray.push(diffs[i]);
                }
            }
            valueArray.sort();
        }
        var setOfValue = new Set(valueArray);
        return [...setOfValue]
    }

    get_meals(){
        var meals = data.map((item)=>item.Meal);
        var cuisines = data.map((item)=>item.Cuisine);
        var diffs = data.map((item) => item.Difficulty);
        var valueArray = [];
        if(this.state.filters.length == 1){
            if (this.state.filters[0] == "Cuisine"){
                for(var i = 0; i < cuisines.length; i++){
                    if(cuisines[i] == this.state.values[0]){
                        valueArray.push(meals[i]);
                    }
                }
            }else{
                for(var i = 0; i < diffs.length; i++){
                    if(diffs[i] == this.state.values[0]){
                        valueArray.push(meals[i]);
                    }
                }
            }
        }else{
            if (this.state.filters[1] == "Cuisine"){
                for(var i = 0; i < cuisines.length; i++){
                    if(diffs[i] == this.state.values[0] && cuisines[i] == this.state.values[1]){
                        valueArray.push(meals[i]);
                    }
                }
            }else{
                for(var i = 0; i < diffs.length; i++){
                    if(cuisines[i] == this.state.values[0] && diffs[i] == this.state.values[1]){
                        valueArray.push(meals[i]);
                    }
                }
            }
        }
        var setOfValue = new Set(valueArray);
        return [...setOfValue]
    }

    renderFilter(){
        if (this.state.filters.length > 0){
            if (this.state.filters[0] == "Cuisine"){
                this.setState({showSecondFilter: true});
                this.state.filters.push("Difficulty");
            }else if(this.state.filters[0] == "Difficulty"){
                this.setState({showSecondFilter: true});
                this.state.filters.push("Cuisine");
            }
        }
    }

    renderSecondFilter(){
        if(this.state.filters[1] == "Cuisine"){
            return (
                <div>
                    <p>Which cuisine do you want? </p>{
                    this.get_distinct_values_second().map((cuisine) => <button onClick={this.apply_second_filter.bind(this, cuisine)}>{cuisine}</button>) 
                    } 
                </div>
            )
        }else{
            return (
                <div>
                    <p>Which level of difficulty do you want? </p>{
                    this.get_distinct_values_second().map((diff) => <button onClick={this.apply_second_filter.bind(this, diff)}>{diff}</button>) 
                    } 
                </div>
            )
        }
    }

    renderMeals(){
        return(
            <div>
                <p>Here are the meals that meet these filter(s):</p>{
                this.get_meals().map((meal) => <button onClick={this.selectMeal.bind(this, meal)}>{meal}</button>) 
                } 
            </div>
        )
    }

    earlyRenderMeals(){
        this.setState({allFiltersApplied: true});
    }

    filter(value){
        console.log(value);
        this.state.filters.push(value);
        console.log(this.state.filters);
        if (value == "Cuisine"){
            this.setState({cuisines: true});
        }else{
            this.setState({difficulties: true});
        }

    }

    random(){
        //return random meal
        console.log("return random meal");
        var min = 1;
        var max = data.length + 3;
        var random = Math.floor(Math.random() * (max - min + 1)) + min;
        var valueArray = data.map((item)=>item.Id);
        var meals = data.map((name)=>name.Meal);
        var setOfValue = new Set(valueArray);
        valueArray = [...setOfValue]
        this.setState({meal: true});
        if (random == 55){
            this.state.meals.push("Emily's Choice");
        }else{
            this.state.meals.push(meals[random-1]);
        }
    }

    apply_filter(value){
        this.state.values.push(value);
        console.log(this.state.values);
        this.setState({level:"second", firstFilterApplied: true});
    }

    apply_second_filter(value){
        this.state.values.push(value);
        console.log(this.state.values);
        this.setState({level:"third", allFiltersApplied: true});
    }

    selectMeal(value){
        console.log(value);
        this.setState({meal: true});
        this.state.meals.push(value);
    }

    getIngredients(){
        var meals = data.map((name)=>name.Meal);
        var ingredients = data.map((i) => i.Ingredients);
        var temp = []
        for(var i = 0; i<meals.length; i++){
            if(meals[i] == this.state.meals[0]){
                temp = ingredients[i].split(",");
            }
        }
        return(
            temp.map((i) => <li>{i}</li>) 
        )
    }

}
