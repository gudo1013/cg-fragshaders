#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 coord = (texcoord * 2.0) - 1.0;
    float radius = length(coord);
    vec2 offset = coord * (sin((radius * 30.0) - (time * 5.0)) + 0.5) / 60.0;
    FragColor = texture(image, offset + texcoord);
}
