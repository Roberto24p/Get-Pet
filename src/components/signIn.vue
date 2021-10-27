<template>
 <div>
    <v-card >
	    <v-card-title class="justify-center">
	        <span class="headline">Sign Up</span>
	    </v-card-title>
	    <v-card-text>
	        <v-text-field v-model="email" label="E-mail" type="email" required >
	        </v-text-field>
	    </v-card-text>
	    <v-card-text>
	        <v-text-field v-model="username"  label="Usuario" required></v-text-field> 
	    </v-card-text>
	    <v-card-text>
	        <v-text-field v-model="password"  type="password" label="Password"></v-text-field>
	    </v-card-text>
	    <v-card-text>
	        <v-text-field v-model="password" type="password" label="Confirma Password"></v-text-field>
	    </v-card-text>
		<v-card-text>
	        <v-text-field v-model="data" type="date" label="Fecha de nacimiento"></v-text-field>
	    </v-card-text>
		<v-card-text>
	        <v-text-field  v-model="about" label="A cerca de ti"></v-text-field>
	    </v-card-text>
		<v-card-text>
	        <v-text-field  v-model="city" label="Ciudad"></v-text-field>
	    </v-card-text>
	    <v-card-actions class="justify-center pb-6">
	        <v-btn @click="register">Register</v-btn>
            <v-btn @click="close">Close </v-btn>
	    </v-card-actions>
    </v-card>
</div> 
</template>

<script>
export default {
	data: function(){
		return {
			email: "r",
			username: "r",
			password: "r",
			name: "",
			date: "",
			about: "",
			city: ""
		}
	},
	methods:{
		close(){
			this.$emit("close")
		},
		async register(){
			const data = {
				email: this.email, 
				username: this.username, 
				password: this.password, 
				name: this.name, 
				date: this.date, 
				about: this.about, 
				city: this.city
			}
			const result = fetch('http://localhost:8090/users ', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})
			result.then(x=>console.log(x))
		}
	},
	

}
</script>

<style>

</style>